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
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				minHeight="50vh"
				sx={{ flexGrow: 2 }}
			>
				<Grid container maxWidth="100vh" spacing={2}>
					<Grid item xs={4}>
						<TableContainer component={Paper}>
							<Table
								sx={{ minWidth: 300 }}
								aria-label="simple table"
							>
								<TableHead>
									<TableRow>
										<TableCell align="center">
											Physicians
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
												},
												"&:hover": {
													backgroundColor:
														"primary.main",
													opacity: [
														0.9,
														0.8,
														0.7
													]
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
								sx={{ minWidth: 300 }}
								aria-label="simple table"
							>
								<TableHead
									sx={{
										backgroundColor:
											"primary.dark"
									}}
								>
									<TableRow>
										<TableCell align="center">
											#
										</TableCell>
										<TableCell align="center">
											Name
										</TableCell>
										<TableCell align="center">
											Time
										</TableCell>
										<TableCell align="center">
											Kind
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
																a.id
															}
														</TableCell>
														<TableCell align="center">
															{
																a.name
															}
														</TableCell>
														<TableCell align="center">
															{
																a.date
															}
														</TableCell>
														<TableCell align="center">
															{
																a.kind
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
