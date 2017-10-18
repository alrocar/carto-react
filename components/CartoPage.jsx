import React, { PropTypes } from 'react';

const CartoPage = React.createClass({

  propTypes: {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  },

  getInitialState() {
    return ({
      data: {},
      zoom: 13.24,
    });
  },

  componentDidMount() {
    cartodb.createVis('mapContainer', 'http://documentation.cartodb.com/api/v2/viz/2b13c956-e7c1-11e2-806b-5404a6a683d5/viz.json', {
            shareable: true,
            title: true,
            description: true,
            search: true,
            tiles_loader: true,
            center_lat: 0,
            center_lon: 0,
            zoom: 2
        })
        .done(function(vis, layers) {
          // layer 0 is the base layer, layer 1 is cartodb layer
          // setInteraction is disabled by default
          layers[1].setInteraction(true);
          layers[1].on('featureOver', function(e, latlng, pos, data) {
            cartodb.log.log(e, latlng, pos, data);
          });
          // you can get the native map to work with it
          var map = vis.getNativeMap();
          // now, perform any operations you need
          // map.setZoom(3);
          // map.panTo([50.5, 30.5]);
        })
        .error(function(err) {
          console.log(err);
        });
  },

  componentWillReceiveProps(nextProps) {
    // if (nextProps.location.pathname !== this.props.location.pathname) {
    //   if (this.map.getLayer('highlighted')) this.map.removeLayer('highlighted');
    //   if (this.map.getSource('highlighted')) this.map.removeSource('highlighted');
    // }
  },

  render() {

    return (
      <div className="main-container">
        <div id="mapContainer" />
      </div>
    );
  },
});

export default CartoPage;
