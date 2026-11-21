
type TamplateProps={
    onClose: () => void;
}

function Template({onClose}:TamplateProps) {
    return (
        <div id="template" >
            <button id="designer" onClick={onClose}>⬅ &nbsp; Back to Dashboard</button>
            <h2>Design Your Template</h2>
            <div>
                <div id="front"></div>
            </div>
        </div>

    )
}
export default Template;