import { lazy, Suspense } from 'react';
import { QdtViz } from "qdt-components";
const  QdtComponent = lazy(() => import("../components/QdtComponent"));

const AccountCategories = () => {
  return (
    <>
      <div className='container-xxl'>
        <div className="row mb-2">
          <div className="col">
            <div className="card">
              <div className="card-header bg-primary text-white d-flex justify-content-between">
                <div className='fs-5 fw-bold'>
                  2023 Interactive Property Tax Dashboard
                  {/* <h6 className="card-subtitle text-white mt-1">2023 Interactive Property Tax Dashboard</h6> */}
                </div>
                <button type="button" className="btn btn-sm bg-primary border-0" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-arrows-angle-expand me-2 text-white" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"/>
                  </svg>
                  <span className='text-white'>
                    Expand Map
                  </span>
                </button>
              </div>
              <div className="card-body">
                <div className='row border-bottom border-2 border-gray'>
                  <div className='col-12 col-md-8 border-end border-1 border-gray'>
                    <Suspense fallback={<div>Loading...</div>}>
                      <QdtComponent
                        component={QdtViz}
                        properties={{}}
                        options={{
                          id: 'd09f8a86-01cb-490e-a110-66f038cf1326',
                          height: `300px`
                        }}
                        appIndex={2}
                      />
                    </Suspense>
                  </div>
                  <div className='col mt-auto mb-5'>
                    <Suspense fallback={<div>Loading...</div>}>
                      <QdtComponent
                        component={QdtViz}
                        properties={{}}
                        options={{
                          id: 'eac456df-3d8c-424e-b0c6-bd6960a99e15',
                          height: `80px`,
                        }}
                        appIndex={2}
                      />
                    </Suspense>
                    <Suspense fallback={<div>Loading...</div>}>
                      <QdtComponent
                        component={QdtViz}
                        properties={{}}
                        options={{
                          id: '4b79ccf5-feca-47dc-bedd-80902bfaaaf1',
                          height: `80px`,
                        }}
                        appIndex={2}
                      />
                    </Suspense>
                    <div className='row pt-5'>
                      <div className='col'>
                        <Suspense fallback={<div>Loading...</div>}>
                          <QdtComponent
                            component={QdtViz}
                            properties={{}}
                            options={{
                              id: 'yJjWZJ',
                              height: `50px`,
                            }}
                            appIndex={2}
                          />
                        </Suspense>
                        </div>
                        <div className='col'>
                        <Suspense fallback={<div>Loading...</div>}>
                          <QdtComponent
                            component={QdtViz}
                            properties={{}}
                            options={{
                              id: 'RsVCvp',
                              height: `50px`,
                            }}
                            appIndex={2}
                          />
                        </Suspense>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row mt-2'>
                  <Suspense fallback={<div>Loading...</div>}>
                    <QdtComponent
                      component={QdtViz}
                      properties={{}}
                      options={{
                        id: 'pRmdfb',
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
      
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">2023 Interactive Property Tax Dashboard</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Suspense fallback={<div>Loading...</div>}>
                <QdtComponent
                  component={QdtViz}
                  properties={{}}
                  options={{
                    id: 'pRmdfb',
                    height: `89vh`,
                  }}
                  appIndex={2}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AccountCategories