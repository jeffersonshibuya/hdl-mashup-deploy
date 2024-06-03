import { useEffect, useRef } from 'react';
import {
  qdtCapabilityApp, qdtCompose, qdtEnigma, QdtViz
} from 'qdt-components';

// const identity = Math.random().toString(32);

// eslint-disable-next-line react-refresh/only-export-components
export const config = {
  host: "ipc-gov.us.qlikcloud.com",
  appId: "d48f9ea1-8e8b-43b9-8218-ce7ada17cf93",
  webIntegrationId: '4UQD-lM4wMMhvuabXqfbRkcsYzqcH2O3',
  // host: "hdl.us.qlikcloud.com",
  // appId: "825d513c-3afb-4b7d-81e8-d525ed427ef9",
  // webIntegrationId: 'qwljbroFxBIk_GpsAeTDFfPySszKnB4o',
  secure: true,
  port: 443,
  prefix: "",
  token: 'token'
}

const capabilityApiAppPromise = qdtCapabilityApp(config);
const engineApiAppPromise = qdtEnigma(config);
qdtCapabilityApp(config).then(app => {
  // const field = app.field('Jurisdiction')
  // field.lock()
  // console.log(field)
  // app.getList('SelectionObject', function(reply: any) {
  //   const selectedFields = reply.qSelectionObject.qSelections;
  //   console.log(selectedFields)

  //   selectedFields.forEach((selection: any) => {
  //     console.log(selection.qField)
  //     app.getField(selection.qField).then((field: any) => {
  //       field.lock();
  //     });
  //   });
  // });

  // app.getField('Jurisdiction').then((field: any) => {
  //   field.lock();
  // });
  // app.getField('Jurisdiction').then((field: any) => {
  //   console.log('lock jurisdiction')
  //   field.lock()
  // })
  // app.getField('Jurisdiction Group').then((field: any) => {
  //   console.log('lock jurisdiction group')
  //   field.lock()
  // })
  // app.field('Jurisdiction').selectValues([{qText: "HC MUD 491"}], false, false);
  app.theme.get().then((theme: any) => {
    theme.apply();
  });
})

function QdtComponent({
  component, properties, options, appIndex,
}: any) {
  const elementRef = useRef(null);
  const init = async () => {
    let app;
    if (appIndex === 2) {
      app = await capabilityApiAppPromise;
      QdtViz({
        element: elementRef.current,
        app,
        options,
      });
    } else {
      app = await engineApiAppPromise
      qdtCompose({
        element: elementRef.current,
        component,
        app,
        properties,
        options,
      });
    }
  };

  useEffect(() => {
    if (elementRef) init();
  }, [init]);

  // if(isLoading) {
  //   return (
  //     <div>Loading chart</div>
  //   )
  // }

  return (
    <>
      <div ref={elementRef} />
    </>
  )
}

export default QdtComponent;
