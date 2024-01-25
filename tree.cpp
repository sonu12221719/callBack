#include<iostream>
using namespace std;

class Node{
    public:
        int data;
        Node* left;
        Node* right;

    Node(int d){
        this->data=d;
        this->left=NULL;
        this->right=NULL;
    }
};

Node* buildTree(Node* root){
    cout<<"Enter data: "<<endl;
    int data;
    cin>>data;
    root=new Node(data);
    if(data==-1){
        return NULL;
    }

    cout<<"Enter data for left of the "<<data<<endl;
    root->left=buildTree(root->left);
    cout<<"Enter data for right of the "<<data<<endl;
    root->right=buildTree(root->right);

    return root;

}

int main(){
    Node* root = NULL;
    root=buildTree(root);
    return 0;
}