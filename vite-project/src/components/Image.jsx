function Image(props) {
    return (
        <div className="Image">
            <img src={props.src}></img>
            <figcaption>{props.caption}</figcaption>
        </div>
    );
}


export default Image;