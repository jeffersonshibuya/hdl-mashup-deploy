import { lazy, Suspense } from 'react';
import { QdtViz } from "qdt-components";
const  QdtComponent = lazy(() => import("../components/QdtComponent"));

const TopProperties = () => {
  return (
    <div className='container-fluid'>
      <div className="row mb-2">
        <div className="col">
          <div className="card">
            <div className="card-header bg-primary text-white fs-5 fw-bold">
              Top 25 Properties
            </div>
            <div className="card-body">
              <div className='row'>
                <Suspense fallback={<div>Loading...</div>}>
                  <QdtComponent
                    component={QdtViz}
                    properties={{}}
                    options={{
                      id: 'ada6b9e1-671e-49a5-8825-238b41fddcf8',
                      height: `50px`,
                    }}
                    appIndex={2}
                  />
                </Suspense>
              </div>
              <div className='row'>
                <Suspense fallback={<div>Loading...</div>}>
                  <QdtComponent
                    component={QdtViz}
                    properties={{}}
                    options={{
                      id: 'c97e2fd7-47f3-4fbf-829b-a0f750e88895',
                      height: `650px`,
                    }}
                    appIndex={2}
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TopProperties