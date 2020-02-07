import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { article } from '../models/article';
import { Observable } from 'rxjs';
import { contentDetails } from '../models/contentDetails';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ArticleService {
private baseURL='http://localhost:8080/api/article/';
private article:article;
private content:contentDetails;
  constructor(private http:HttpClient) { }
 
  AddArticle(article:Object,content:Object):Observable<Object>{
    return this.http.post(this.baseURL+'addArticle',article,content);
  }
  DeleteArticle(id:number):Observable<Object>{
    return this.http.delete(this.baseURL+id);
  }
  getAll():Observable<Object>{
    return this.http.get(this.baseURL);
  }

}
