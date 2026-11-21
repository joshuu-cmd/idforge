
type TamplateProps={
    onClose: () => void;
}

function Template({ onClose }: TamplateProps) {
    return (
        <div id="template" >
            <button id="designer" onClick={onClose}>⬅ &nbsp; Back to Dashboard</button>
            <h2>Design Your Template</h2>
            <div>
                <div id="front">
                    <p>Drag And Drop Here</p>
                    <p>OR</p>
                    <label>Upload Image</label>
                    <form>                       
                        <input type="file" accept="image/*" ></input>                       
                        <button>Upload</button>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default Template;