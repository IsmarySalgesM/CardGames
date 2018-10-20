import shuffle from 'lodash.shuffle';
import FontAwseme from './FontAwseme';

const numCart = 8;


export default () =>{
    const awesome = FontAwseme();
    let cartas = []; 

    while (cartas.length < numCart){
    const index = Math.floor(Math.random()* awesome.length);
    const carta = {
        icono: awesome.splice(index, 1)[0],
        guessLetter : false
    };

    cartas.push(carta);
    cartas.push({...carta});
    }

    return shuffle(cartas)



}
