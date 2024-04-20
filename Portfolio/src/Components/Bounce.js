import React, {useRef , useEffect } from 'react'
import "../CSS/Bounce.css"

let x=300;
let y=150;
let radius=15;
let vx=1.5;
let vy=1.5;
let move;


function BouncingBall(){
    let canvasRef=useRef(null);

    useEffect(() => {
        let context=canvasRef.current.getContext('2d')
        const drawBall=()=>{
            context.clearRect(0,0,canvasRef.current.width, canvasRef.current.height)
            context.beginPath();
            context.arc(x,y,radius,0,2*Math.PI)
            context.fillStyle='#EFE2BA '
            context.fill();
            x+=vx;
            y+=vy
            if (x>canvasRef.current.width-radius || x<radius){
                vx *=-1;
            }
            else if ( y>canvasRef.current.height-radius||y<radius){
                vy*= -1;
            }
            move = requestAnimationFrame(drawBall);
        }
        drawBall();
        return ()=>{
            cancelAnimationFrame(move)
        }

    });
    return (
    <div className='canvas-container'>
        <canvas className='canvas' ref={canvasRef}
        width={window.innerWidth/2}
        height={window.innerHeight/2}
        >
        </canvas>
    </div>
)
}
export default BouncingBall