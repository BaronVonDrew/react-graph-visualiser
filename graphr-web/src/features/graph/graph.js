import  React  from 'react'
import { Sigma, RandomizeNodePositions, RelativeSize } from 'react-sigma';
import GraphApi from '../../common/api';
import logo from '../../logo.svg'
import ForceAtlas2 from 'react-sigma/lib/ForceAtlas2';

export class DrewGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            myGraph: null
        }
    }

    componentDidMount() {
        GraphApi.getGraph(1)
            .then(graph => {
                console.log('setting state')
                return this.setState({
                    myGraph: graph
                });
            });
    }

    render() { 
        let graph = (
            <div style={{textAlign: 'start',  height: '800px', border: '1px groove grey'}}>
                <Sigma 
                    graph={this.state.myGraph} 
                    settings={{
                        animationsTime: 3000,
                        drawEdges: true, 
                        clone: false,
                        defaultNodeColor: '#ec5148'
                    }}
                    renderer="webgl"
                    style={{
                        height: 'inherit',
                        maxWidth: 'inherit'
                    }}>
                    <RandomizeNodePositions>
                        <ForceAtlas2
                            timeout={5000}
                            linLogMode
                        />
                    </RandomizeNodePositions>
                    <RelativeSize initialSize={15}/>
                </Sigma>
            </div>
        ); 

        let loading = <img src={logo} className="App-logo" alt="logo" />
        
        if (this.state.myGraph)
            return graph;

        return loading;
    }
}
