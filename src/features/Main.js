import React, { Component } from "react";
import Search from "./Search/Search";
import PostList from "./Posts/PostList";
import { connect } from "react-redux";
import { displayList, setSearchField, setFilter, setFilterDate } from "../app/listActions";
import Spinner from "../Spinner.gif";
import "./Posts/posts.scss";

const mapStateToProps = (state) => {
  return {
    posts: state.displayList.inputs,
    searchField: state.SearchList.searchField,
    showFilter: state.SearchList.showFilter,
    filterSearchField: state.filterSearch.filterField,
    filterDateSearch: state.filterDateSearch.filterDateField,
    isPending: state.displayList.isPending,
    error: state.displayList.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ondisplayList: () => dispatch(displayList()),
    onSearch: (e) => dispatch(setSearchField(e.target.value)),
    filterSearch: (e) => dispatch(setFilter(e.target.value)),
    filterDate: (e) => dispatch(setFilterDate(e.target.value)),
  };
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: this.props.posts,
    };
  }

  componentDidMount() {
    this.props.ondisplayList();
  }
  render() {
    let {
      posts,
      filterSearchField,
      filterDateSearch,
      searchField,
      onSearch,
      filterSearch,
      filterDate,
      isPending,
       showFilter
    } = this.props;
    

    const mainposts = posts.filter((post) => {
      if ( searchField && filterDateSearch) {
        return post.subreddit.toLowerCase().includes(searchField.toLowerCase())  && new Date(post.created_utc * 1000).getDay() === new Date(filterDateSearch).getDay();      
      } else if ( searchField && filterSearchField ) { 
    
        return post.subreddit.toLowerCase().includes(searchField.toLowerCase()) && post.ups === filterSearchField;
        
      }  else if ( searchField && filterSearchField && filterDateSearch){
          return  post.subreddit.toLowerCase().includes(searchField.toLowerCase()) && post.ups === filterSearchField  && new Date(post.created_utc * 1000).getDay() === new Date(filterDateSearch).getDay();      
      } else if ( ( searchField && !filterSearchField && !filterDateSearch)){
        return  post.subreddit.toLowerCase().includes(searchField.toLowerCase())
      } return post 
     
    });
    return (
      <div>
        <Search showFilter={showFilter}
          onFilter={filterSearch}
          onFilterDate = {filterDate}
          filterField={filterSearchField}
          onSearch={onSearch}
        />

        <div className="container-fluid text-center mt-4">
          <h3 className="text-left"> Categories </h3>

          {isPending ? 
            <div>
              <img src={Spinner} alt="loading" />
              <h6 className="alert"> Loading posts... </h6>
            </div>
           : 
            <PostList  posts={mainposts} />
          }

      

        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
