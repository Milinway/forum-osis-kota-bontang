(function () {
  /* =========================================
     DEKLARASI VARIABEL GLOBAL (di awal)
  ========================================= */
  let sliderCounter = 0;  // ✅ PINDAH KE SINI (awal IIFE)
  let linkPickerOverlay = null;
  let linkPickerBox = null;
  let updateModalOverlay = null;

  /* =========================================
     RENDER CARD "UPDATE TERBARU"
  ========================================= */

  const updates = window.updateData || [];
  const featuredContainer = document.getElementById("featuredContainer");
  const featuredSection = document.querySelector(".berita-update");

  if (featuredContainer) {
    if (!Array.isArray(updates) || updates.length === 0) {
      if (featuredSection) featuredSection.style.display = "none";
    } else {
      updates.forEach(item => {
        const card = document.createElement("div");
        card.className = "featured-card";

        const thumb = document.createElement("div");
        thumb.className = "featured-thumb";
        const sliderHTML = createImageSliderHTML(item.gambar);  // ✅ Sekarang sliderCounter sudah ada
        thumb.innerHTML = sliderHTML || "";

        const info = document.createElement("div");
        info.className = "featured-info";

        const h3 = document.createElement("h3");
        h3.textContent = item.judul || "";

        const linkBtn = document.createElement("button");
        linkBtn.type = "button";
        linkBtn.className = "featured-link";
        linkBtn.textContent = "Lihat Selengkapnya";

        const sourceBtn = document.createElement("button");
        sourceBtn.type = "button";
        sourceBtn.className = "featured-source-badge";
        sourceBtn.innerHTML = 'source: <i class="fa-brands fa-instagram"></i>';

        info.appendChild(h3);
        info.appendChild(linkBtn);
        info.appendChild(sourceBtn);

        card.appendChild(thumb);
        card.appendChild(info);

        linkBtn.addEventListener("click", () => {
          openUpdateModal(item);
        });

        bindSourceBadge(sourceBtn, item.url);

        featuredContainer.appendChild(card);
      });

      initImageSliders(featuredContainer);
    }
  }

  const featuredNext = document.getElementById("featuredNext");
  const featuredPrev = document.getElementById("featuredPrev");

  function scrollFeatured(direction) {
    if (!featuredContainer) return;

    const card = featuredContainer.querySelector(".featured-card");
    const gap = 16;
    const amount = (card ? card.offsetWidth : 350) + gap;

    featuredContainer.scrollBy({
      left: direction * amount,
      behavior: "smooth"
    });
  }

  if (featuredNext) {
    featuredNext.addEventListener("click", () => scrollFeatured(1));
  }

  if (featuredPrev) {
    featuredPrev.addEventListener("click", () => scrollFeatured(-1));
  }

  /* =========================================
     IMAGE SLIDER (reusable)
  ========================================= */

  function createImageSliderHTML(images) {
    const list = Array.isArray(images) ? images.filter(Boolean) : [images].filter(Boolean);

    if (!list.length) {
      return '';
    }

    if (list.length === 1) {
      const src = list[0];
      return `<img src="${escapeAttr(src)}" alt="">`;
    }

    sliderCounter += 1;  // ✅ Sekarang aman diakses
    const sliderId = `imgSlider-${sliderCounter}`;

    const imgs = list.map((src, i) =>
      `<img src="${escapeAttr(src)}" alt="" class="${i === 0 ? "active" : ""}">`
    ).join("");

    const dots = list.map((_, i) =>
      `<button type="button" class="img-slider-dot ${i === 0 ? "active" : ""}" data-index="${i}" aria-label="Gambar ${i + 1}"></button>`
    ).join("");

    return `
      <div class="img-slider" id="${sliderId}" data-autoplay="pending" role="region" aria-roledescription="carousel">
        <div class="img-slider-track">
          ${imgs}
        </div>
        <div class="img-slider-dots" role="tablist">${dots}</div>
      </div>
    `;
  }

  function initImageSliders(root) {
    const scope = root || document;
    const sliders = scope.querySelectorAll('.img-slider[data-autoplay="pending"]');

    sliders.forEach(slider => {
      slider.dataset.autoplay = "running";

      const imgs = Array.from(slider.querySelectorAll("img"));
      const dots = Array.from(slider.querySelectorAll(".img-slider-dot"));
      if (!imgs.length) return;

      let current = 0;
      let timer = null;

      function show(index) {
        current = index;
        imgs.forEach((img, i) => img.classList.toggle("active", i === index));
        dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
      }

      function startTimer() {
        stopTimer();
        if (imgs.length <= 1) return;
        timer = setInterval(() => {
          show((current + 1) % imgs.length);
        }, 3500);
        slider._sliderTimer = timer;
      }

      function stopTimer() {
        if (timer) {
          clearInterval(timer);
          timer = null;
          slider._sliderTimer = null;
        }
      }

      dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
          e.stopPropagation();
          const idx = parseInt(dot.dataset.index, 10);
          if (!Number.isNaN(idx)) {
            show(idx);
            startTimer();
          }
        });
      });

      startTimer();
      slider._stopSlider = stopTimer;
    });
  }

  window.createImageSliderHTML = createImageSliderHTML;
  window.initImageSliders = initImageSliders;

  /* =========================================
     SOURCE LINK (reusable)
  ========================================= */

  function ensureLinkPicker() {
    if (linkPickerOverlay) return;

    linkPickerOverlay = document.createElement("div");
    linkPickerOverlay.className = "link-picker-overlay";
    linkPickerOverlay.innerHTML = `<div class="link-picker-box" role="dialog" aria-modal="true"></div>`;
    document.body.appendChild(linkPickerOverlay);

    linkPickerBox = linkPickerOverlay.querySelector(".link-picker-box");

    linkPickerOverlay.addEventListener("click", (e) => {
      if (e.target === linkPickerOverlay) closeLinkPicker();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLinkPicker();
    });
  }

  function openLinkPicker(links) {
    ensureLinkPicker();
    if (!Array.isArray(links) || !links.length) return;

    linkPickerBox.innerHTML = links.map(link => `
      <button type="button" class="link-picker-item" data-url="${escapeAttr(link.url)}">
        ${escapeHtml(link.label || "Lihat Link")}
      </button>
    `).join("");

    linkPickerBox.querySelectorAll(".link-picker-item").forEach(btn => {
      btn.addEventListener("click", () => {
        const url = btn.dataset.url;
        if (url) window.open(url, "_blank");
        closeLinkPicker();
      });
    });

    linkPickerOverlay.classList.add("active");
  }

  function closeLinkPicker() {
    if (linkPickerOverlay) linkPickerOverlay.classList.remove("active");
  }

  function bindSourceBadge(badgeEl, urlData) {
    if (!badgeEl) return;

    badgeEl.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (!urlData) return;

      if (typeof urlData === "string") {
        window.open(urlData, "_blank");
        return;
      }

      if (Array.isArray(urlData)) {
        const links = urlData.map(item =>
          typeof item === "string" ? { label: "Lihat Link", url: item } : item
        );

        if (links.length === 1) {
          window.open(links[0].url, "_blank");
        } else if (links.length > 1) {
          openLinkPicker(links);
        }
      }
    });
  }

  window.bindSourceBadge = bindSourceBadge;
  window.closeLinkPicker = closeLinkPicker;

  /* =========================================
     MODAL "LIHAT SELENGKAPNYA"
  ========================================= */

  function ensureUpdateModal() {
    if (updateModalOverlay) return;

    updateModalOverlay = document.createElement("div");
    updateModalOverlay.className = "update-modal-overlay";
    updateModalOverlay.innerHTML = `
      <div class="update-modal-box" role="dialog" aria-modal="true" aria-label="Update detail">
        <button type="button" class="update-modal-close" aria-label="Tutup">&times;</button>
        <div class="update-modal-media"></div>
        <div class="update-modal-body">
          <div class="update-modal-content">
            <span class="update-modal-tag">deskripsi</span>
            <h3 class="update-modal-title"></h3>
            <p class="update-modal-excerpt"></p>
          </div>
          <div class="update-modal-footer">
            <span class="update-modal-date"></span>
            <button type="button" class="featured-source-badge update-modal-source">
              source: <i class="fa-brands fa-instagram"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(updateModalOverlay);

    const closeBtn = updateModalOverlay.querySelector(".update-modal-close");
    if (closeBtn) closeBtn.addEventListener("click", closeUpdateModal);

    updateModalOverlay.addEventListener("click", (e) => {
      if (e.target === updateModalOverlay) closeUpdateModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeUpdateModal();
    });
  }

  function openUpdateModal(item) {
    if (!item) return;
    ensureUpdateModal();

    const media = updateModalOverlay.querySelector(".update-modal-media");
    const title = updateModalOverlay.querySelector(".update-modal-title");
    const excerpt = updateModalOverlay.querySelector(".update-modal-excerpt");
    const date = updateModalOverlay.querySelector(".update-modal-date");
    const sourceBtn = updateModalOverlay.querySelector(".update-modal-source");

    media.innerHTML = createImageSliderHTML(item.gambar);
    initImageSliders(media);

    title.textContent = item.judul || "";
    excerpt.innerHTML = (item.excerpt || "").replace(/\n/g, "<br>");
    date.textContent = item.tanggal || "";

    if (sourceBtn) {
      const freshSourceBtn = sourceBtn.cloneNode(true);
      sourceBtn.replaceWith(freshSourceBtn);
      bindSourceBadge(freshSourceBtn, item.url);
    }

    updateModalOverlay.classList.add("active");

    const firstFocusable = updateModalOverlay.querySelector(".update-modal-close");
    if (firstFocusable) firstFocusable.focus();
  }

  function closeUpdateModal() {
    if (!updateModalOverlay) return;

    updateModalOverlay.classList.remove("active");
    closeLinkPicker();

    updateModalOverlay.querySelectorAll(".img-slider").forEach(slider => {
      if (slider._stopSlider) slider._stopSlider();
      if (slider._sliderTimer) {
        clearInterval(slider._sliderTimer);
        slider._sliderTimer = null;
      }
    });

    const media = updateModalOverlay.querySelector(".update-modal-media");
    if (media) media.innerHTML = "";
  }

  window.openUpdateModal = openUpdateModal;
  window.closeUpdateModal = closeUpdateModal;

  /* =========================================
     Utilities
  ========================================= */

  function escapeAttr(s) {
    if (!s) return "";
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function escapeHtml(s) {
    return escapeAttr(s);
  }
})();