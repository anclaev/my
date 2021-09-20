export const useSectionScroll = () => {
    let _sections: HTMLElement[] = []
    let _currentSection = 0;    

    const init = () => {
        _sections = [...document.getElementsByTagName('section')]
        window.addEventListener('wheel', WheelListener, { passive: false })
    }

    const destroy = () => {
        window.removeEventListener('wheel', WheelListener)
    }

    const WheelListener = (e: WheelEvent) => {
        e.preventDefault();
      
        (e.deltaY < 0) ? --_currentSection: ++_currentSection;
      
        if (_currentSection < 0) _currentSection = 0;
        else if (_currentSection > (_sections.length - 1)) _currentSection = (_sections.length - 1);
      
        scrollToSection(_currentSection);
      }

    const scrollToSection = (i: number) => {
        document.getElementById(_sections[i].id).scrollIntoView({
            behavior: 'smooth'
          });
    }

    return Object.freeze({
        init, 
        destroy
    });
}
