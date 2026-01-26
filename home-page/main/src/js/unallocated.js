document.addEventListener('DOMContentLoaded', function() {
    const maxValue = 10; 
    let factValue = 7.5;
    const minOpacity = 0.2; 
    const factSpan = document.querySelector('.unallocated__fact-span');
    const svgPaths = document.querySelectorAll('.unallocated__progress-bar path');

    factSpan.textContent = `${factValue} млн. руб.`;

   
    factValue = Math.min(factValue, maxValue);

    const fillPercentage = (factValue / maxValue) * 100;


    const totalPaths = svgPaths.length;

    const pathsToFill = Math.floor((fillPercentage / 100) * totalPaths);

    svgPaths.forEach((path, index) => {
        let opacity;
        if (index < pathsToFill) {
            opacity = 1; 
        } else if (index === pathsToFill && fillPercentage % (100 / totalPaths) !== 0) {
 
            const partialFill = (fillPercentage / 100) * totalPaths - pathsToFill;
            opacity = partialFill;
        } else {
            opacity = minOpacity; 
        }

        path.setAttribute('fill-opacity', Math.max(minOpacity, opacity.toFixed(2)));
    });
});