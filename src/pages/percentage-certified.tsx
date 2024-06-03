import { lazy, Suspense } from 'react';
import { QdtViz } from "qdt-components";
const  QdtComponent = lazy(() => import("../components/QdtComponent"));

const PercentageCertified = () => {
  return (
    <div className='container-xxl'>
      <div className="row mb-2">
        <div className="col">
          <div className="card">
            <div className="card-header bg-primary text-white fs-5 fw-bold">
              Percentage of Certified Accounts
            </div>
            <div className="card-body">
              <div className='row'>
                <div className='col-12 col-lg-6'>
                  <Suspense fallback={<div>Loading...</div>}>
                    <QdtComponent
                      component={QdtViz}
                      properties={{}}
                      options={{
                        id: '0f7c3613-cb72-4d60-94be-915258632cff',
                        height: `300px`,
                      }}
                      appIndex={2}
                    />
                  </Suspense>
                </div>
                <div className='col'>
                  <div className='row'>
                    <div className='col-12 border-bottom border-gray mb-2'>
                      <Suspense fallback={<div>Loading...</div>}>
                        <QdtComponent
                          component={QdtViz}
                          properties={{}}
                          options={{
                            id: '3d39d632-a36a-4330-bf9c-4a1bd5af4043',
                            height: `140px`,
                          }}
                          appIndex={2}
                        />
                      </Suspense>
                    </div>
                    <div className='col-12 col-md-6 border-bottom border-gray mb-2'>
                      <Suspense fallback={<div>Loading...</div>}>
                        <QdtComponent
                          component={QdtViz}
                          properties={{}}
                          options={{
                            id: '6a032798-dfdc-42a2-a991-7c7856e94a74',
                            height: `70px`,
                          }}
                          appIndex={2}
                        />
                      </Suspense>
                    </div>
                    <div className='col-12 col-md-6 border-bottom border-gray mb-2'>
                      <Suspense fallback={<div>Loading...</div>}>
                        <QdtComponent
                          component={QdtViz}
                          properties={{}}
                          options={{
                            id: 'ca51bb1f-696a-41c6-b3f3-ef289ae76f85',
                            height: `70px`,
                          }}
                          appIndex={2}
                        />
                      </Suspense>
                    </div>
                    <div className='col-12 col-md-6 '>
                      <Suspense fallback={<div>Loading...</div>}>
                        <QdtComponent
                          component={QdtViz}
                          properties={{}}
                          options={{
                            id: '86f00b1f-c5b5-4bf8-a569-8786cfb7c96b',
                            height: `70px`,
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
                            id: '0eb6b33d-9f30-46a9-b618-4afb2f0c2b14',
                            height: `70px`,
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
      </div>
    </div>
  )
}
export default PercentageCertified