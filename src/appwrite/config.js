import { Account, Client, ID , Query, Databases,Storage} from "appwrite";
import conf from "../conf/conf";

export class Service {
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost ({title,slug,content,featuredImage,status,userId}) {
      try {
        return await this.databases.createDocument(
           conf.appwriteDatabaseId,
           conf.appwriteCollectionId,
           slug,
           {
            title,
            content,
            featuredImage,
            status,
            userId
           }
        )
      } catch (error) {
        console.log("appwrite service :: create Post :: error",error);
      }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
      try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }
        )
      } catch (error) {
       console.log("appwrite service :: update Post :: error",error);
      } 
      
    }
     async deletePost(slug){
      try {
        await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
        return true
      } catch (error) {
       console.log("appwrite service :: delete Post :: error",error);
       return false
      } 
      
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("appwrite service :: get Post :: error",error);
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
       try {
         return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries
         )
       } catch (error) {
         console.log("appwrite service :: get Posts :: error",error);
         return false
       }
    }

    async uploadFile(file){
        try {
           return this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
           ) 
        } catch (error) {
            console.log("appwrite service :: upload File :: error",error);
            return false
        }
    }

    async deleteFile(fileId){
       try {
        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true
       } catch (error) {
        console.log("appwrite service :: delete File :: error",error);
       }
    }

    getFileView(fileId){
        return this.bucket.getFileView(
            conf.appwriteBucketId,
            fileId
        )
    }

}
const service = new Service();
export default service;