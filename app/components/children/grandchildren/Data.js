// Include React
var React = require("react");

//Creating a component 
var Query = React.createClass({

    //delete button/ saved aritcle

    deleteBtn: function() {
        $.ajax({url: "/api/saved/" + this.props.id, type: "DELETE", success: (result) => {
            if (result) {
                $.get("/api/saved").done((data) => {
                    this.props.setParent(data);
                });
            }
        }})
    },
    // showing saved articles for the user
    render: function() {
        return (
            <div className = "panel-body">
                    <a href = {this.props.url}><h3>
                            {this.props.title}
                    </h3>
                    </a>
                    <h5>
                        {this.props.date}
                    </h5>


                    <button className="saveBtn btn btn-primary btn-lg"
									id="button"
                                    data-title={this.props.title}
									data-date={this.props.date}
									data-url={this.props.url}
									data-id={this.props.id}
									onClick={this.deleteBtn}>
						Delete
					</button>
                    <hr>
                    </hr>
            </div>
        );
    }
});

// Export the component back for use in other files

module.exports = Query;