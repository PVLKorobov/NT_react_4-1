import { useState } from "react"
import './Converter.css'


function Converter() {
    const [bgColor, setBgColor] = useState(null)
    const [rgbText, setRgbText] = useState('')


    function isValidHex(code) {
        if (code.length == 7 && code[0] == '#' && parseInt(code.substring(1,3), 16) && parseInt(code.substring(3,5), 16) && parseInt(code.substring(5,7), 16)) {
            return true
        }

        return false
    }

    function convertHexToRgb(hexCode) {
        return {r: parseInt(hexCode.substring(1,3), 16),
                g: parseInt(hexCode.substring(3,5), 16),
                b: parseInt(hexCode.substring(5,7), 16)
            }
    }

    function onFormInputChange(e) {
        if (e.target.value != '') {
            if (isValidHex(e.target.value)) {
                const rgbColor = convertHexToRgb(e.target.value)
                setRgbText(`rgb(${rgbColor.r},${rgbColor.g},${rgbColor.b})`)
                setBgColor(rgbColor)
            }
            else {
                setRgbText('Ошибка')
                setBgColor({r: 255, g: 50, b: 0})
            }
        } else {
            setRgbText('')
            setBgColor(null)
        }
    }


    function getBgStyle() {
        if (bgColor) {
            return {backgroundColor: `rgb(${bgColor.r},${bgColor.g},${bgColor.b})`}
        } else {
            return {}
        }
    }


    return (
    <div className="converter__wrapper" style={getBgStyle()}>
        <div className="fields__wrapper">
            <form className="hex-code-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="" name="hexCode" className="field" onChange={(e) => onFormInputChange(e)}/>
            </form>
            <div className="field">{rgbText}</div>
        </div>
    </div>
  )
}

export default Converter