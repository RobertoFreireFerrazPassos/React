import './body.css'

function BodyBar(props){
    const bodyStyle = { marginLeft : "25%",  padding: "1px 16px", height : "1000px" };
    return (   
        <div className="bodybar"> 
            <div style={bodyStyle}>
                {props.children}
            </div>
        </div>
    );
}

export default BodyBar;

