function MyButton() {
    function handleClick(){
        alert("you clicked hilter's nose")
    }
    return (
        <button className="button" onClick={handleClick}>
            <span className="button_lg">
            <span className="button_sl"></span>
            <span className="button_text">More About Me</span>
            </span>
        </button>
    )
}
export default MyButton;