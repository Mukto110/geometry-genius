function calculateRectangle(){
    const recWidth = document.getElementById('rectangle-width');
    const recWidthText = recWidth.value;
    const width = parseFloat(recWidthText);

    const recLength = document.getElementById('rectangle-length');
    const recLengthText = recLength.value;
    const length = parseFloat(recLengthText);

    const result = width * length;

    const resultArea = document.getElementById('result-area');
    resultArea.innerText = result;

}