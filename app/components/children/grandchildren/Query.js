// Include React
var React = require("react");


//Creating a component 

var Query = React.createClass({
    //function to save the article, 
    saveBtn: function () {
        var obj = {
            title: this.props.title,
            url: this.props.url,
            date: this.props.date
        };

        $.post("/api/saved", obj);
        $("#" + this.props.index).empty();
    },
    //showing saved articles for the user to be saved or not saved.)
    render: function() {
        return (
            <div id={this.props.index}>
                <div className = "panel-body">
                        <a href = {this.props.url}><h3>
                                {this.props.title}
                        </h3>
                        </a>

                        <h5>
                            {this.props.date}
                        </h5>

                        <button className = "saveBtn btn btn-primary btn-lg"
                                id="button"
                                data-title = {this.props.title}
                                data-date = {this.props.date}
                                data-url = {this.props.url}
                                data-id = {this.props.index}
                                onClick = {this.saveBtn}>
                            Save
                        </button>
                        <hr>
                        </hr>
                </div>
            </div>
        );
    }
});
// Export the component back for use in other files

module.exports = Query;