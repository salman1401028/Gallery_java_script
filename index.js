

var panel1 = document.getElementById("panel-1")
var panel2 = document.getElementById('panel-2')
var panel3 = document.getElementById('panel-3');
var panel4 = document.getElementById('panel-4');
var panel5 = document.getElementById('panel-5');

function resetActivePanels(){
    document.getElementById("panel-1").classList.remove('active');
    document.getElementById("panel-2").classList.remove('active');
    document.getElementById("panel-3").classList.remove('active');
    document.getElementById("panel-4").classList.remove('active');
    document.getElementById("panel-5").classList.remove('active');
}
function selectPanel(panelNo) {
    //panel2.classList.add('active');
    
    resetActivePanels();

    switch (panelNo) {
        case 1:
            document.getElementById("panel-1").classList.add('active');
            break;
        case 2:
            document.getElementById("panel-2").classList.add('active');
            break;
        case 3:
            document.getElementById("panel-3").classList.add('active');
            break;
        case 4:
            document.getElementById("panel-4").classList.add('active');
            break;
        case 5:
            document.getElementById("panel-5").classList.add('active');
            break;

    }
}