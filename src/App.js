import React, { Component } from "react";
import "./App.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "react-bootstrap";
import { width } from "@mui/system";

export default class App extends Component {
  state = {
    fullName: "Amal Gafsi",
    bio: "Étudiante en génie informatique avec une licence fondamentale en mathématiques et applications. Intéressé par le développement software. Au travers mes expériences acquises durant mes études et mes stages, j'ai travaillé sur différents projets qui m'ont aidé à développer mes compétences en travail d'équipe et en gestion du temps. Si motivée et enthousiaste, je suis toujours à la recherche de nouveaux défis pour développer et partager mes compétences et ma créativité.",
    imgSrc: "./me.png",
    profession: "Student",
    show: false,
  };

  handleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="App">
        <Button variant="primary" size="lg" onClick={this.handleClick}>
          Show Profile
        </Button>
        {/* {this.state.show ? <div>Hello</div> : null} */}
        {this.state.show && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                image={this.state.imgSrc}
                alt="my Photo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {this.state.fullName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {this.state.bio}
                </Typography>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    );
  }
}
