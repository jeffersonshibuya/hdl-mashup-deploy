import { QdtSelections } from "qdt-components"
import QdtComponent from "./QdtComponent"

const SelectionsBar = () => {
  return (
    <div className='bg-white border-2 border-top border-secondary border-opacity-50'>
        <div className='container'>
          <QdtComponent
            component={QdtSelections}
            properties={{
              qSelectionObjectDef: {},
            }}
          />
        </div>
      </div>
  )
}
export default SelectionsBar