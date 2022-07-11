<?php

namespace App\Http\Controllers;

use App\Models\Pages;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pages = Pages::all(['id','parent_id','slug','title','content']);
        return response()->json($pages);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $value=$request->all();

        $page = new Pages; 
        $page->title=$value['title'];
        $page->content=$value['content'];
        $page->slug=\Str::slug($value['title']);
        $page->save();

        return response()->json(['code'=>200,'success'=>true]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pages  $pages
     * @return \Illuminate\Http\Response
     */
    public function show(Pages $pages)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pages  $pages
     * @return \Illuminate\Http\Response
     */
    public function edit(Pages $page)
    {
      
        return response()->json(['code'=>200,'content'=>$page->content,'title'=>$page->title]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pages  $pages
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pages $page)
    {
        $value=$request->all();

        $page->title=$value['title'];
        $page->content=$value['content'];
        $page->slug=\Str::slug($value['title']);
        $page->save();

        return response()->json(['code'=>200,'success'=>true]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pages  $pages
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pages $page)
    {
        $page->delete();
        return response()->json(['code'=>200,'success'=>true]);
    }
}
