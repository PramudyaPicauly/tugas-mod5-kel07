import Tilt from "react-tilt";
import "./Profile.css";

export default function Profile() {
	const data = [
		{
			id: 1,
			nama: "Khairun Nisa M",
			nim: 21120119120006,
		},
		{
			id: 2,
			nama: "Sayid Miqdad",
			nim: 21120119120046,
		},
		{
			id: 3,
			nama: "Pramudya Anggara P",
			nim: 21120119130061,
		},
		{
			id: 4,
			nama: "Reyhan Chairul A",
			nim: 21120119140140,
		},
	];
	return (
		<div className="profile">
			<h1>Anggota Kelompok</h1>
			{data.map((item) => {
				return (
					<div className="profile-card">
						<div id="profile-picture">
							<Tilt
								className="Tilt"
								options={{
									max: 60,
									perspective: 10000,
									scale: 1.15,
								}}
								style={{ height: 100, width: 100 }}
							>
								<div
									id={`profile-avatar${item.id}`}
									className="Tilt-inner"
								></div>
							</Tilt>
						</div>
						<div id="profile-info">
							<p id="nama">{item.nama}</p>
							<p id="nim">{item.nim}</p>
							<p id="univ">Universitas Diponegoro</p>
						</div>
						<div id="separator"></div>
						<div id="ig">
							<i className="fab fa-instagram fa-lg ig-icon"></i>
							<p id="ig-title">Instagram</p>
						</div>
						<div id="git">
							<i className="fab fa-github git-icon"></i>
							<p id="git-title">GitHub</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
