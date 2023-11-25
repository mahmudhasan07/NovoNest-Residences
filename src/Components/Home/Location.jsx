import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Location = () => {
    const defaultProps = {
        center: {
          lat: 23.7897087,
          lng: 90.4104344
        },
        zoom: 11
      };
    return (
        <section>
            <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={23.7876402}
          lng={90.4140864}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
        </section>
    );
};

export default Location;