import { connect } from "react-redux";
import ItemList from "../components/ItemList";
import { toggleItem } from "../actions";

const mapStateToProps = state => ({
    items: state
})

const mapDispatchToProps = dispatch => ({
    toggleItem: id => dispatch(toggleItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)