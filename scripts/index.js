
class Home extends React.Component {
    render() {
        return (<h1>Home</h1>);
    }
}

function getHome() {
    //渲染主页
    const element = (
        <div>
            <Home />
        </div>
    );
    ReactDOM.render(
        element, document.getElementById('content')
    );
}

class ItemList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        var {list} = this.props;

        return (<div>
            {
                list.map(item=>{
                    return (
                        <Item key={item.id} item={item} />
                    )
                })
            }
        </div>);
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {item} = this.props;
        return (
            <div>
                <h1>{item.title}</h1>
                {
                    item.hasOwnProperty('abstract')?<h4>{item.abstract}</h4>:null
                }
            </div>
        )
    }
}

function getArticles() {
    const element = (
        <div>
            <ItemList list={articles} />
        </div>
    );
    ReactDOM.render(
        element, document.getElementById('content')
    );
}

function getStudy() {
    const element = (
        <div>
            <ItemList list={studies} />
        </div>
    );
    ReactDOM.render(
        element, document.getElementById('content')
    );
}

function getCV() {
    const element = (
        <img src={cv.src}></img>
    );
    ReactDOM.render(
        element, document.getElementById('content')
    );

}