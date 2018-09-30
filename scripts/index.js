
// 主页设计

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

// 列表组件设计

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

// 组件设计

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {item} = this.props;
        return (
            <div onClick = {getArticle.bind(this, item)}>
                <h1>{item.title}</h1>
                {
                    item.hasOwnProperty('abstract')?<h4>{item.abstract}</h4>:null
                }
            </div>
        )
    }
}

function getArticles() {
    console.log('articles');
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

// 文章界面设计

class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {item} = this.props;
        if(item.hasOwnProperty('src')){
            var reader = new FileReader();
            var f = reader.onload(item.src);
            console.log(item.src);
            var text=reader.readAsText(f);
            console.log(text);
            return (
                <div dangerouslySetInnerHTML={{__html: {text}}} />
            )
        }
        var list = item.content.split('\n');
        return (
            <div>
                <h1>{item.title}</h1>
                {
                    list.map((par) => {
                        return <p className='plaintext'>{par}</p>
                    })
                }
                {/* <textarea className="plaintext">{item.content}</textarea> */}
            </div>
        )
    }
}

function getArticle(item) {
    // console.log(e);
    console.log('article');
    console.log(item.title);
    const element = (
        <div>
            <Article item={item} />
        </div>
    );
    ReactDOM.render(
        element, document.getElementById('content')
    );
}
