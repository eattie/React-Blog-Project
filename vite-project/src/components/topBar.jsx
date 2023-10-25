

function TopBar() {
    return (
        <div style={{ backgroundColor : 'lightblue', maxWidth: '1000px', }} className="TopBar">
            <div className="spec">Home</div>
            <div className="spec">ML</div>
            <div className="spec">AI</div>
            <div className="spec"><a>Dogs!</a></div>
        </div>
    );
}


export default TopBar;