import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Scategorie } from '../../../classes/scategorie';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addscategorie',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './addscategorie.component.html',
  styleUrl: './addscategorie.component.css',
})
export class AddscategorieComponent {
  newSousCategorie = signal<Scategorie>({});
}
