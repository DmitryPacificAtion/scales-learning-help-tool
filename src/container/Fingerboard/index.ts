import { connect } from "react-redux";
import View from "../../components/Fingerboard";
import mapDispatchToProps from "./mapDispatchToProps";
import mapStateToProps from "./mapStateToProps";

export default connect(mapStateToProps, mapDispatchToProps)(View);
