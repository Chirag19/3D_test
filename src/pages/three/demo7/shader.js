const seashader = {
    vs:`
        varying vec3 iPosition;
        void main(){
            iPosition = position;
            float x = position.x;
            float y = sin(x / 10.0) * 10.0;
            float z = sin(x / 10.) * 10.0;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
    `,
    fs:`
        varying vec3 iPosition;
        void main(){
            float posx = iPosition.x;
            float x = sin(posx / 1.0);
            float y = sin(iPosition.y /3.0);
            float z = sin(iPosition.z / 5.);
            gl_FragColor = vec4(x,y,z,1.0);            
        }
    `,
}

export {seashader}