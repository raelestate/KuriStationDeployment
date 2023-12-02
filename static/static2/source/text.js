
  function adjustFontSize() {
    const container = document.querySelector('.textcontainer');
    const text = document.getElementById('resizableText');

    const containerWidth = container.offsetWidth;
    const textWidth = text.scrollWidth;

    const fontSize = parseInt(window.getComputedStyle(text).fontSize);

    if (textWidth > containerWidth) {
      const newFontSize = fontSize * (containerWidth / textWidth);
      text.style.fontSize = `${newFontSize}px`;
    } else {
      text.style.fontSize = '17px'; // Reset to default font size
    }
  }

  // Call the adjustFontSize function on window resize
  window.addEventListener('resize', adjustFontSize);

  // Initial call to adjustFontSize
  adjustFontSize();