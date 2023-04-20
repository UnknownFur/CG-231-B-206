//Escalado Esfera (Escala en x, Escala en y, Escala en z)
function Escala (x, y, z){
    esfera[0].scale.x = x;
    esfera[0].scale.y = y;
    esfera[0].scale.z = z;
}

//Rotado Esfera (Rotado en x, Rotado en y, Rotado en z)
function Rotacion(x, y, z){
    esfera[0].rotateX(x);
    esfera[0].rotateY(y);
    esfera[0].rotateZ(z);
}

//Traslacion Esfera (Traslacion en x, Traslacion en y, Traslacion en z)
function Traslacion(x, y, z){
    esfera[0].translateX(x);
    esfera[0].translateY(y);
    esfera[0].translateZ(z);
}
