import { lazy, Suspense } from 'react';
import { QdtViz } from "qdt-components";
const  QdtComponent = lazy(() => import("../components/QdtComponent"));

const AppraisedValue = () => {
  return (
    <div className='container-xxl'>
      <div className="row mb-2">
        <div className="col">
          <div className="card">
            <div className="card-header bg-primary text-white fs-5 fw-bold">
              Appraised Value
            </div>
            <div className="card-body">
              <div className='row border-bottom border-2 border-gray'>
                <div className='col-12 col-md-6 border-end border-1 border-gray'>
                  <div className='row'>
                      <Suspense fallback={<div>Loading...</div>}>
                        <QdtComponent
                          component={QdtViz}
                          properties={{}}
                          options={{
                            id: 'fe0fc093-ad91-4a7e-9086-c6d02b402090',
                            height: `70px`,
                          }}
                          appIndex={2}
                        />
                      </Suspense>
                  </div>
                  <div className='row mb-2 mt-2'>
                    <div className="list-group list-group-horizontal-md pl-2">
                      <div className="list-group-item list-group-item-action">
                        <Suspense fallback={<div>Loading...</div>}>
                          <QdtComponent
                            component={QdtViz}
                            properties={{}}
                            options={{
                              id: 'ec67187a-4234-45d9-94eb-16f0ba2fd2e0',
                              height: `40px`,
                            }}
                            appIndex={2}
                          />
                        </Suspense>
                      </div>
                      <div className="list-group-item list-group-item-action">
                        <Suspense fallback={<div>Loading...</div>}>
                          <QdtComponent
                            component={QdtViz}
                            properties={{}}
                            options={{
                              id: 'ca3f8742-5e1a-433c-b6f8-c8f6ac35bb8c',
                              height: `40px`,
                            }}
                            appIndex={2}
                          />
                        </Suspense>
                      </div>
                      <div  className="list-group-item list-group-item-action">
                        <Suspense fallback={<div>Loading...</div>}>
                          <QdtComponent
                            component={QdtViz}
                            properties={{}}
                            options={{
                              id: 'cbe7fb02-0363-402b-8526-d1739a84374e',
                              height: `40px`,
                            }}
                            appIndex={2}
                          />
                        </Suspense>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='row'>
                    <Suspense fallback={<div>Loading...</div>}>
                      <QdtComponent
                        component={QdtViz}
                        properties={{}}
                        options={{
                          id: 'd850aa49-649f-4faa-9b0f-2c0a7225333f',
                          height: `70px`,
                        }}
                        appIndex={2}
                      />
                    </Suspense>
                  </div>
                  <div className='row mb-2 mt-2 ms-2'>
                      <div className="list-group list-group-horizontal-md">
                        <div className="list-group-item list-group-item-action">
                          <Suspense fallback={<div>Loading...</div>}>
                            <QdtComponent
                              component={QdtViz}
                              properties={{}}
                              options={{
                                id: 'ec67187a-4234-45d9-94eb-16f0ba2fd2e0',
                                height: `40px`,
                              }}
                              appIndex={2}
                            />
                          </Suspense>
                        </div>
                        <div className="list-group-item list-group-item-action">
                          <Suspense fallback={<div>Loading...</div>}>
                            <QdtComponent
                              component={QdtViz}
                              properties={{}}
                              options={{
                                id: 'ca3f8742-5e1a-433c-b6f8-c8f6ac35bb8c',
                                height: `40px`,
                              }}
                              appIndex={2}
                            />
                          </Suspense>
                        </div>
                        <div  className="list-group-item list-group-item-action">
                          <Suspense fallback={<div>Loading...</div>}>
                            <QdtComponent
                              component={QdtViz}
                              properties={{}}
                              options={{
                                id: 'cbe7fb02-0363-402b-8526-d1739a84374e',
                                height: `40px`,
                              }}
                              appIndex={2}
                            />
                          </Suspense>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className='row mt-4'>
                <Suspense fallback={<div>Loading...</div>}>
                  <QdtComponent
                    component={QdtViz}
                    properties={{}}
                    options={{
                      id: '03f538ee-ece2-4d65-a1e3-b8d284162578',
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
  )
}
export default AppraisedValue