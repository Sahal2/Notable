import React from "react";
import UserService from "../services/UserService";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

class UserComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			setSelectedRow: 1
		};
	}

	componentDidMount() {
		UserService.getUsers().then(response => {
			this.setState({ users: response.data });
		});
	}

	render() {
		return (
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<TableContainer component={Paper}>
							<Table
								sx={{ minWidth: 650 }}
								aria-label="simple table"
							>
								<TableHead>
									<TableRow>
										<TableCell align="center">
											Dessert (100g serving)
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{this.state.users.map(user => (
										<TableRow
											key={user.id}
											sx={{
												"&:last-child td, &:last-child th": {
													border: 0
												}
											}}
										>
											<TableCell
												align="center"
												onClick={() =>
													this.setState({
														setSelectedRow:
															user.id
													})
												}
											>
												{
													user
														.appointments[0]
														.name
												}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
					<Grid item xs={8}>
						<TableContainer component={Paper}>
							<Table
								sx={{ minWidth: 650 }}
								aria-label="simple table"
							>
								<TableHead>
									<TableRow>
										<TableCell align="center">
											Dessert (100g serving)
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{this.state.users.map(user => {
										if (
											user.id ===
											this.state.setSelectedRow
										) {
											return user.appointments.map(
												a => (
													<TableRow
														key={a.id}
														sx={{
															"&:last-child td, &:last-child th": {
																border: 0
															}
														}}
													>
														<TableCell align="center">
															{
																a.name
															}
														</TableCell>
													</TableRow>
												)
											);
										}
									})}
								</TableBody>
							</Table>
						</TableContainer>
					</Grid>
				</Grid>
			</Box>
		);
	}
}

export default UserComponent;
