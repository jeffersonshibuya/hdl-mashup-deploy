import { lazy, Suspense } from 'react';
import { QdtViz } from "qdt-components";
const  QdtComponent = lazy(() => import("../components/QdtComponent"));

const ExamptionCategories = () => {
  return (
    <div className='container-xxl'>
      <div className="row mb-2">
        <div className="col">
          <div className="card">
            <div className="card-header bg-primary text-white fs-5 fw-bold">
              Exemption Categories
            </div>
            <div className="card-body">
              <div className='row'>
                <div className='col-12 col-md-6'>
                  <Suspense fallback={<div>Loading...</div>}>
                    <QdtComponent
                      component={QdtViz}
                      properties={{}}
                      options={{
                        id: '3bbb079c-f8ec-4139-8ece-5cc2525ec381',
                        height: `300px`,
                      }}
                      appIndex={2}
                    />
                  </Suspense>
                </div>
                <div className='col-12 col-md-6'>
                  <Suspense fallback={<div>Loading...</div>}>
                    <QdtComponent
                      component={QdtViz}
                      properties={{}}
                      options={{
                        id: '6fb3c4f4-c9fb-4a28-bc90-07be271966c3',
                        height: `300px`,
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
    </div>
  )
}
export default ExamptionCategories