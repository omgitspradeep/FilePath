import React,{useState} from "react";

function App() {


  return(

    <React.Fragment>
      <Folder name="Softwares" > 
        <Folder name="Free">
          <File name="tor.deb"/>
          <File name="Adobe.exe"/>
          <File name="visual-studio.deb"/>
        </Folder> 
        <Folder name="Paid">
          <File name="Kaspersky.apk"/>
          <File name="WindowsOfiice365.exe"/>
          <File name="visual-studio.deb"/>

        </Folder>
        <File name="Open Source"/>
      </Folder>

      <br/>

      <Folder name="Hardwares" > 
        <File name="Hard drives"/>
        <File name="Cpu"/>
        <File name="Fan"/>
      </Folder>

      <br/>


    </React.Fragment>
  );

}


const Folder = (props) =>{

  const [isOpen, setIsOpen] = useState(true);

  const handleClick=(props)=>{
    setIsOpen(!isOpen);
  }
  


  const {name, children} =props;
  const arrowDirection = isOpen ? 'down' : 'right';
  const folderIcon = isOpen ? 'folder open' : 'folder';

  console.log(props)
  const childStyle ={
    marginLeft:'40px'
  }
  return( 
    <div>
      <span onClick={handleClick}>
         <i className = {`${folderIcon} icon`}></i>  
         <i className = {`caret ${arrowDirection} icon`}></i>  
         </span>
         {name}

      <div  style={childStyle}>
        {isOpen ? children : null}
      </div>
    </div>

  );
}

const File = (props) =>{

  const {name} =props;

  const fileExtension = name.split('.')[1]

  const fileIcons={
    apk: "android",
    deb: "linux",
    exe: "microsoft"
  }
  return(
    <div>
      <i className={ `${fileIcons[fileExtension]} icon`}></i>
      {name}
      </div>
  );
}

export default App;
