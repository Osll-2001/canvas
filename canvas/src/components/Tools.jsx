import { useSelector, useDispatch } from "react-redux"
import { changeBrushColor, changeBrushRadius, changeImageBackground } from "../redux/confCanvaSlice"
import '../styles/App.scss';
import { useState } from "react";

const Tools = () => {

  const dispatch=useDispatch();
  const {brushColor,brushRadius}=useSelector((state)=>state.confCanva);
  const [background, setBackground]=useState(null);
  const [urlImage,setUrlImage]=useState('');

  //change the attribute brushColor of the state global
  const handleChangeColor = (e)=>{
    dispatch(changeBrushColor(e.target.value))
  }

  //change the attribute brushRadius of the state global
  const handleChangeRadius = (e)=>{
    dispatch(changeBrushRadius(e.target.value))
  }

  //change the attribute imageBackground of the state global
  const handleChangeImage=(e)=>{
    //get objectURL
    const urlImage=URL.createObjectURL(e.target.files[0]);
    dispatch(changeImageBackground(urlImage));
    //set image in the element that preview of the image
    setBackground(urlImage)
  }
  
  const handleInputSearch=(e)=>{
    setUrlImage(e.target.value)
  }

  const insertBackground=()=>{
    dispatch(changeImageBackground(urlImage))
  }

  return (
    <section className='toolsMenu'>
      <h1>Configuraciones</h1>
      <div className="elementMenu">
        <h3>Color Pincel</h3>
        <input type="color" value={brushColor} onChange={handleChangeColor}/>
      </div>
      <div className="elementMenu">
        <h3>Tamaño pincel</h3>
        <input type="range" value={brushRadius} onChange={handleChangeRadius}/>
        <p className="rangeConf">{brushRadius}</p>
      </div>
      <div className="elementMenu">
        <h3>Fondo</h3>
        <div className="searchBackgroundUrl">
          <p>Url </p>
          <input type="text" name="urlImg" value={urlImage} onChange={handleInputSearch}/>
          <button onClick={insertBackground}>Ok✅</button>
        </div>
        <div className="searchBackgroundLocal">
          <p>Subir imagen</p>
          <input type="file" name='localImageSearch' onChange={handleChangeImage} />
          <img src={background?background:'../../public/noBackground.jpg'} width={150} height={150}/>
        </div>
      </div>
    </section>
  )
}

export default Tools