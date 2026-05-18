import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './create-song.dto';

@Injectable()
export class SongsService {
  private songs: CreateSongDto[] = [];

  create(song: CreateSongDto) {
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    return this.songs;
  }

  findOne(id: number): CreateSongDto | undefined {
    const song = this.songs.find((song: CreateSongDto) => song.id === id);
    console.log('Found song:', song);
    return song;
  }

  update(id: number, updatedSong: CreateSongDto): CreateSongDto | undefined {
    const findIdx = this.songs.findIndex(
      (song: CreateSongDto) => song.id === id,
    );
    if (findIdx === -1) {
      return undefined;
    }
    this.songs[findIdx] = { ...this.songs[findIdx], ...updatedSong };
    return this.songs[findIdx];
  }

  delete(id: number): boolean {
    const filteredSongs = this.songs.filter(
      (song: CreateSongDto) => song.id !== id,
    );
    this.songs = filteredSongs;
    return true;
  }
}
