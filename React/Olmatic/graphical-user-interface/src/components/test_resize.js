import React, { Component } from 'react';
import { withResizeDetector } from 'react-resize-detector';
import SampleMultiChart from './sample_multichart';

const containerStyles = {
  height: '80%',
  width:'100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid',
  padding: '20px', 
  resize: 'both',
  overflow: 'auto'
};

class TestResize extends Component {
  state = {
    color: 'red'
  };

  componentDidUpdate(prevProps) {
    const { width } = this.props;
    const {height} = this.props;

    if (width !== prevProps.width || height !== prevProps.height) {
      this.setState({
        color: width > 500 ? 'coral' : 'aqua',
        color: height > 500 ? 'coral' : 'aqua'
      });
    }
  }

  render() {
    const { width, height } = this.props;
    const { color } = this.state;
    return <div>
        <SampleMultiChart/>    
    </div>;
  }
}

const AdaptiveWithDetector = withResizeDetector(TestResize);

// const resizeTest = () => {
//   return (
//     <div>
//       <p>The rectangle changes color based on its width</p>
//       <AdaptiveWithDetector />
//     </div>
//   );
// };

export default AdaptiveWithDetector;