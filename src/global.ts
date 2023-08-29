function init() {
  const items = document.getElementsByClassName('demo') as HTMLCollectionOf<Element>;
  for (let i = 0, len = items.length; i < len; i++) {
    const item = items.item(i) as Element;
    item.addEventListener('click', function () {
      const child = item.nextSibling as ChildNode as HTMLElement;
      if (child) {
        if (child.style.display === 'none') {
          child.style.display = 'block';
        } else {
          child.style.display = 'none';
        }
      }
    });
  }
}

export default init;
