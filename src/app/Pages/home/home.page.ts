import { Component, OnInit } from '@angular/core';
import {Table} from 'src/app/Entities/Table';
import {getRepository,Repository} from 'typeorm';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

   
  loaddata:any =null;

  constructor() { }

  ngOnInit() {
    this.run();
  }

   async run()
  {
    const post = new Table();
    post.name ="Sashi";
    post.Age =28;
    post.Date="12/23/09";
    const data  = getRepository(Table) as Repository<Table>;
    await data.save(post);
    
     this.loaddata = await data.find();
     console.log(this.loaddata);

  }


}