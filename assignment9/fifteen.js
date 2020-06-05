$(function () {

    $("#puzzlearea").css( {"background-image":"url(background-custom.jpg)"});

    let row=0;
    let col=0;

let emptyRow=3;
let emptyColumn=3;

$("#puzzlearea div ").each(function (i, element) {

    let div=$(this);
    let pos="square_"+row+"_"+col;
    let x = ((i % 4) * 100) ;
    let y = (Math.floor(i / 4) * 100) ;

    div.addClass("puzzlepiece").css({
        "left": x+ "px",
        "top" : y + "px",
        "src": "background-custom.jpg",
        "background-position": -x + "px " + (-y) + "px"
    }).attr({"id":pos,"x":x, "y":y});

div.x=x;
div.y=y;

if((i+1)%4==0){
    row++;
    col=0;
}
else {
    col++;
}

//on hover behaviour
        $("#puzzlearea div ").hover(function (e) {

            let ele=$(this);
          let _row=ele.attr("y")/100;
          let _col=ele.attr("x")/100;

           // console.log(id)
let _isMovable=isMovable(_row,_col);
           // console.log(_isMovable)
            if(_isMovable.isValid)
                ele.addClass("movablepiece");
            e.stopImmediatePropagation();
        }, function () {
            $(this).removeClass("movablepiece");
        });

        //on click o square div
    $("#puzzlearea div ").click(function (e) {

        let ele=$(this);

        let _row=ele.attr("y")/100;
        let _col=ele.attr("x")/100;

        // console.log(id)
        let _isMovable=isMovable(_row,_col);

        if(_isMovable.isValid)
        moveSequare(_isMovable.row,_isMovable.col,ele);

        e.stopImmediatePropagation();
    });
});

function isMovable(row,col){
   // console.log("paramters row"+row+ "col"+col);
    let _validRow=-1;   //default value
    let _valideCol=-1;
    let isvalid=false;

   if(row==emptyRow) {

       if(col+1==emptyColumn){
           _validRow=row;
           _valideCol=col+1;
           isvalid=true;
       }
           if(col-1==emptyColumn){
               _valideCol=col-1;
               _validRow=row;
               isvalid=true;
           }
   } else if( col==emptyColumn){

       if(row+1==emptyRow){
           _validRow=row+1;
           _valideCol=col;
           isvalid=true;
       }
       if(row-1==emptyRow){
           _validRow=row-1;
           _valideCol=col;
           isvalid=true;
       }
   }
   // console.log(isvalid)
    return {
       "row":_validRow,
        "col":_valideCol,
        "id": "square_"+row+"_"+col,
        "isValid": isvalid
    }
}
function moveSequare(row,col,elem){

    emptyRow=elem.attr("y")/100;
    emptyColumn=elem.attr("x")/100;

    let _x=col*100;
    let _y=row*100;
    let _newid="square_"+row+"_"+col;

    elem.css({
        "left": _x+ "px",
        "top" : _y+ "px",
        "src": "background-custom.jpg",
        "background-position": -_x + "px " + (_y) + "px",
        "position":"absolute"
    }).attr({"id":_newid,"x":_x, "y":_y});

   // console.log("Empty row:"+emptyRow+"Col"+emptyColumn)
}

$("#shufflebutton").click(function () {

let element;
let _row=emptyRow;
let _col=emptyColumn;

    for (let i=0; i<100;i++){
    element="square_"+_row+"_"+(_col-1);

        _row=  parseInt(Math.random() * 4)
        _col=parseInt(Math.random() * 4);
  //  console.log(element)

    let isMove=isMovable(_row,_col)
    if(isMove.isValid)
        shuffle(isMove.row,isMove.col,isMove.id);

    }

});

    function shuffle(row, col, ele) {
    let elemObj=$(("#"+ele));
   moveSequare(row,col,elemObj);

    }
});
