import { createClient } from "@supabase/supabase-js";
import { act } from "react";

class Home {
  constructor() {
    this.initSupabase()
    this.getData()
  }

  //Lien avec supabase
  initSupabase() {
    this.supabase = createClient('https://tolihxasrbfkzhdoohzq.supabase.co', 'sb_publishable_hIjNVBLPenQLiyZmEIHgHg_8FNjsh-u')

    console.log(this.supabase)
  }

  async getData() {
    const valeurDeRetour = await this.supabase
      .from('movie')
      .select()
      console.log(valeurDeRetour)

      valeurDeRetour.data.forEach((element) => this.createMovie(element) );
    }

  async setData(){
  }

  createForm(){
    const form = document.getElementsById('form');

    form.addEventListener("submit", (e) => this.handleSubmit(e))
  }

  handleSubmit(e){
    const titleValue = document.getElementById('form_title').value;
    const studioValue = document.getElementById('form_studio').value;
    const prodValue = document.getElementById('form_prod').value;
    const yearValue = document.getElementById('form_year').value;
    const genreValue = document.getElementById('form_genre').value;
    const actorsValue = document.getElementById('form_actor').value;
    const buttonValue = document.getElementById('formbutton').value;
    console.log(titleValue)


    const { data, error } = await supabase
    .from('movie')
    .insert([{titleValue, studioValue, prodValue, yearValue, genreValue, actorsValue, buttonValue}])

    if (error) {
      console.error(error);
      return;
    }
  }

  createMovie(element) {

    const container = document.createElement('div');
    container.classList.add('movie_card')
    document.body.appendChild(container)

    const posterBox = document.getElementById('app');
    document.body.appendChild(posterBox)

    const titre = document.createElement('h2');
    titre.innerText = element.title;
    document.body.appendChild(titre);
    console.log(element)

    const creation = document.createElement('div')
    creation.classList.add('creation_text')

    const stud = document.createElement('p');
    stud.innerText = element.studio;
    document.body.appendChild(stud);

    const prod = document.createElement('p');
    prod.innerText = element.director;
    document.body.appendChild(prod);

    const year = document.createElement('p');
    year.innerText = element.release_date;
    document.body.appendChild(year);

    const type = document.createElement('p');
    type.innerText = element.genre;
    document.body.appendChild(type);

    const actors = document.createElement('p');
    actors.innerText = element.main_actors;
    document.body.appendChild(actors)

    const img = document.createElement('img')
    img.src = element.image
    img.classList.add('movie_poster')
    document.body.appendChild(img)



    posterBox.appendChild(container)
    // posterBox.appendChild(form)
    container.appendChild(titre);
    // container.appendChild(posterBox)
    container.appendChild(img);
    container.appendChild(creation);
    container.appendChild(type);
    container.appendChild(actors);

    creation.appendChild(stud);
    creation.appendChild(prod);
    creation.appendChild(year);

    
  }
}


new Home();

