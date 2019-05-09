import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
  artista: any;
  tracks: any[];
  loadingArtist: boolean;
  loadingTracks: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.activatedRoute.params.subscribe(params => {
      const { id } = params;
      this.getArtista(id);
      this.getTopTracks(id);
    });
  }

  getArtista(id: string) {
    this.loadingArtist = true;
    this.spotify.getArtista(id).subscribe(artista => {
      this.artista = artista;
      this.loadingArtist = false;
    });
  }

  getTopTracks(id: string) {
    this.loadingTracks = true;
    this.spotify.getTopTracks(id).subscribe((tracks: any) => {
      this.tracks = tracks;
      this.loadingTracks = false;
    });
  }
}
